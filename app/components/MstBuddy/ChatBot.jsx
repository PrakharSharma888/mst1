"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function ChatBot() {
  const mountRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreen(); // run once
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    const container = mountRef.current;

    //responsive size
    let width = isMobile ? 110 : 170;
    let height = isMobile ? 110 : 170;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = isMobile ? 7 : 6;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);

    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(2, 5, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x66fcf1, 1, 100);
    pointLight.position.set(-2, -2, 2);
    scene.add(pointLight);

    const loader = new GLTFLoader();
    let botGroup = new THREE.Group();
    scene.add(botGroup);

    let modelReady = false;

    const chatbotUrl = "/MstBuddy/chatbot.glb";

    loader.load(
      chatbotUrl,
      (gltf) => {
        const model = gltf.scene;

        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        const maxAxis = Math.max(size.x, size.y, size.z);
        model.scale.multiplyScalar(4.0 / maxAxis);

        //  mobile size only 
        if (isMobile) {
          botGroup.scale.set(0.7, 0.7, 0.7);
        }

        box.setFromObject(model);
        box.getCenter(center);

        model.position.sub(center);

        botGroup.add(model);
        modelReady = true;

        botGroup.position.y = isMobile ? -0.1 : -0.2;
      },
      undefined,
      (error) => {
        console.error("Error loading model:", error);
      }
    );

    let targetRotationX = 0;
    let targetRotationY = 0;

    const updateRotation = (clientX, clientY) => {
      const rect = container.getBoundingClientRect();

      const widgetCenterX = rect.left + rect.width / 2;
      const widgetCenterY = rect.top + rect.height / 2;

      const dx = clientX - widgetCenterX;
      const dy = clientY - widgetCenterY;

      const normalizedX = (dx / window.innerWidth) * 2;
      const normalizedY = (dy / window.innerHeight) * 2;

      targetRotationY = Math.max(
        Math.min((normalizedX * Math.PI) / 2, Math.PI / 2.5),
        -Math.PI / 2.5
      );
      targetRotationX = Math.max(
        Math.min((normalizedY * Math.PI) / 4, Math.PI / 4),
        -Math.PI / 4
      );
    };

    const handleMouseMove = (event) => {
      updateRotation(event.clientX, event.clientY);
    };

    const handleTouchMove = (event) => {
      const touch = event.touches[0];
      if (touch) {
        updateRotation(touch.clientX, touch.clientY);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchmove", handleTouchMove);

    const timer = new THREE.Timer();
    let timeCounter = 0;

    function animate() {
      requestAnimationFrame(animate);

      timer.update();
      const delta = timer.getDelta();
      timeCounter += delta;

      if (modelReady) {
        botGroup.rotation.y +=
          (targetRotationY - botGroup.rotation.y) * 4 * delta;
        botGroup.rotation.x +=
          (targetRotationX - botGroup.rotation.x) * 4 * delta;
        botGroup.position.y = Math.sin(timeCounter * 2) * 0.1;
      }

      renderer.render(scene, camera);
    }

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleTouchMove);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      renderer.dispose();
    };
  }, [isMobile]); 

  return (
    <div
      ref={mountRef}
      style={{
        width: isMobile ? "110px" : "100%",
        height: isMobile ? "110px" : "100%",

        position: isMobile ? "fixed" : "relative",
        bottom: isMobile ? "-10px" : "auto",
        right: isMobile ? "-20px" : "auto",

        zIndex: 9999,
      }}
    />
  );
}