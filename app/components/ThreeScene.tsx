"use client";

import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function ThreeScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, -15, 20);
    scene.add(camera);

    const light1 = new THREE.PointLight(0xff0000, 300);
    light1.position.set(0, 10, 0);
    // scene.add(light1);

    const light2 = new THREE.PointLight(0x0000ff, 1000);
    light2.position.set(0, -10, 0);
    // scene.add(light2);

    const orbit = new OrbitControls(camera, renderer.domElement);
    orbit.enableZoom = false;
    orbit.minPolarAngle = Math.PI / 2;
    orbit.maxPolarAngle = (3 * Math.PI) / 5;
    orbit.minAzimuthAngle = -Math.PI / 4;
    orbit.maxAzimuthAngle = Math.PI / 4;
    orbit.update();

    const loader = new GLTFLoader();
    let mixer: THREE.AnimationMixer | null = null;
    let model: THREE.Object3D | null = null;

    loader.load(
      "/spidey.glb",
      (gltf) => {
        model = gltf.scene;
        scene.add(model);
        mixer = new THREE.AnimationMixer(model);
        gltf.animations.forEach((clip) => mixer?.clipAction(clip).play());
        setIsLoading(false);
      },
      undefined,
      (error) => {
        console.error("Error loading model:", error);
        setIsLoading(false);
      }
    );

    const clock = new THREE.Clock();
    const animate = () => {
      if (mixer) mixer.update(clock.getDelta());
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    function addLights() {
      scene.add(light2);
      setTimeout(() => {
        scene.add(light1);
      }, 1000);
    }

    setTimeout(() => {
      addLights();
      window.addEventListener("mousemove", handleMouseMove);
    }, 1000);

    const handleMouseMove = (event: MouseEvent) => {
      if (!model) return;

      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      model.rotation.y = mouseX * Math.PI * 0.2;
      model.rotation.x = mouseY * Math.PI * 0.07;
    };

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 z-20 bg-black flex justify-center items-center">
          Loading...
        </div>
      )}
      <canvas ref={canvasRef} className="" />
    </div>
  );
}
