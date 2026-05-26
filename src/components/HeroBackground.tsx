import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    let renderer: THREE.WebGLRenderer | null = null;
    let handleResize: (() => void) | null = null;
    let handleMouseMove: ((e: MouseEvent) => void) | null = null;
    let animationId: number | null = null;

    try {
      const scene = new THREE.Scene();
      const width = container.offsetWidth || window.innerWidth || 100;
      const height = container.offsetHeight || window.innerHeight || 100;
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      const particlesCount = 2000;
      const posArray = new Float32Array(particlesCount * 3);
      for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 12;
      }
      const particlesGeometry = new THREE.BufferGeometry();
      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.012,
        color: 0xc5a059,
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending
      });

      const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particlesMesh);

      const spheresGroup = new THREE.Group();
      const sphereGeo = new THREE.SphereGeometry(0.4, 32, 32);
      const spheres: { mesh: THREE.Mesh; speed: number; offset: number }[] = [];

      for (let i = 0; i < 6; i++) {
        const mat = new THREE.MeshBasicMaterial({ color: 0xc5a059, transparent: true, opacity: 0.08 });
        const mesh = new THREE.Mesh(sphereGeo, mat);
        mesh.position.set((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 5);
        spheresGroup.add(mesh);
        spheres.push({ mesh, speed: 0.001 + Math.random() * 0.002, offset: Math.random() * 100 });
      }
      scene.add(spheresGroup);

      camera.position.z = 5;

      let mouseX = 0;
      let mouseY = 0;

      const onMouseMove = (e: MouseEvent) => {
        mouseX = (e.clientX / window.innerWidth) - 0.5;
        mouseY = (e.clientY / window.innerHeight) - 0.5;
      };
      window.addEventListener('mousemove', onMouseMove);
      handleMouseMove = onMouseMove;

      const onResize = () => {
        const w = container.offsetWidth || window.innerWidth || 100;
        const h = container.offsetHeight || window.innerHeight || 100;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer?.setSize(w, h);
      };
      window.addEventListener('resize', onResize);
      handleResize = onResize;

      const animate = () => {
        animationId = requestAnimationFrame(animate);

        particlesMesh.rotation.y += 0.0008;
        particlesMesh.rotation.x += mouseY * 0.02;
        particlesMesh.rotation.y += mouseX * 0.02;

        spheres.forEach(s => {
          const time = Date.now() * s.speed;
          s.mesh.position.y += Math.sin(time + s.offset) * 0.005;
          s.mesh.position.x += Math.cos(time + s.offset) * 0.005;
        });

        renderer?.render(scene, camera);
      };

      animate();
    } catch (error) {
      console.warn("WebGL initialization failed, falling back to static background layout:", error);
    }

    return () => {
      if (handleMouseMove) window.removeEventListener('mousemove', handleMouseMove);
      if (handleResize) window.removeEventListener('resize', handleResize);
      if (animationId) cancelAnimationFrame(animationId);
      if (renderer) {
        try {
          renderer.dispose();
          if (renderer.domElement && container.contains(renderer.domElement)) {
            container.removeChild(renderer.domElement);
          }
        } catch (e) {
          console.error("Clean up error during Three.js unmount", e);
        }
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 z-[-1] pointer-events-none opacity-60"
      id="hero-canvas-container"
    />
  );
}
