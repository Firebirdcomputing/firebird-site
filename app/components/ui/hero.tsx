'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Heros(): JSX.Element {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const scrollY = useRef(0);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    currentMount.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(20, 20, 100, 100);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2() },
        uScroll: { value: 0 },
      },
      vertexShader: `
        uniform float uTime;
        uniform vec2 uMouse;
        uniform float uScroll;
        varying float vHeight;
        void main() {
          vec3 pos = position;
          float dist = distance(vec2(pos.x, pos.y), uMouse * 10.0);
          pos.z = sin(dist * 3.0 + uTime * 2.0) * 0.3 + sin(pos.x * 5.0 + uScroll * 1.5) * 0.1;
          vHeight = pos.z;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        varying float vHeight;
        void main() {
          float intensity = smoothstep(0.0, 1.0, vHeight + 0.5);
          vec3 blue = vec3(0.0, 0.4, 1.0);
          vec3 black = vec3(0.0, 0.0, 0.0);
          gl_FragColor = vec4(mix(black, blue, intensity), 1.0);
        }
      `,
      wireframe: true,
    });

    const gridMesh = new THREE.Mesh(geometry, material);
    gridMesh.rotation.x = -Math.PI / 1;
    gridMesh.position.y = -5; // ⬅️ Raised grid slightly
    scene.add(gridMesh);

    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      material.uniforms.uTime.value = elapsedTime;
      material.uniforms.uMouse.value.set(mouse.current.x, mouse.current.y);
      material.uniforms.uScroll.value = scrollY.current;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleScroll = () => {
      scrollY.current = window.scrollY / window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      currentMount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#060d15] text-white">
      {/* Canvas */}
      <div ref={mountRef} className="absolute inset-0 z-0" />

      {/* Top-right Subheading */}
      <p
        className="absolute z-20 font-medium text-[14px] sm:text-[18px] text-white/70 text-right"
        style={{ top: '40px', right: '30px', maxWidth: '400px' }} // ⬅️ Reduced top spacing
      >
        Deploy Firebird’s decentralized compute stack in days—not months.
      </p>

      {/* Left Floating Image */}
      <Image
        src="/images/00208.png"
        alt="Left Reflect"
        width={400}
        height={400}
        className="absolute z-10 animate-float"
        style={{ left: '8%', top: '30%' }}
        priority
      />

      {/* Right Floating Smaller Image */}
      <Image
        src="/images/00210.png"
        alt="Right Reflect"
        width={200}
        height={200}
        className="absolute z-10 animate-float"
        style={{ right: '8%', top: '35%' }}
        priority
      />

      {/* Title Below Images */}
      <h1
        className="absolute z-20 text-center font-bold text-[32px] sm:text-[42px] w-full px-4 leading-tight"
        style={{
          top: '40%',
          left: '5%',
          background: 'linear-gradient(90deg, #FF0D0D 0%, #FF700A 50%, #FFE606 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Sovereign AI Infrastructure<br />Built in Africa
      </h1>

      {/* CTA Buttons */}
      <div
        className="absolute z-20 flex justify-center gap-4 sm:gap-6 w-full px-4 opacity-0 animate-fade-in-up delay-[900ms]"
        style={{
          top: 'calc(60% + 90px)', // ⬅️ Adjust this as needed
        }}
      >
        <button className="px-5 py-3 sm:px-6 sm:py-3 bg-white/20 text-white font-semibold text-[14px] sm:text-[16px] rounded-[10px] backdrop-blur-md border border-white/30 shadow-lg hover:bg-white/30 transition-all">
          BOOK A DEMO
        </button>
        <button className="px-5 py-3 sm:px-6 sm:py-3 bg-transparent text-white font-semibold text-[14px] sm:text-[16px] rounded-[10px] backdrop-blur-md border border-white/50 shadow-lg hover:bg-white/10 transition-all">
          MORE
        </button>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-1 animate-bounce">
          <div className="w-1 h-1 bg-white rounded-full" />
        </div>
      </div>

      {/* Floating animation style */}
      <style jsx>{`
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
