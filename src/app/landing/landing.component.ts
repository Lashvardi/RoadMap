import { Component, OnInit } from '@angular/core';
import * as THREE from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import { ContactComponent } from '../contact/contact.component';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var scene = new THREE.Scene();
    var container = document.getElementById("gia") as HTMLDivElement;
    var width = container.clientWidth;
    var height = container.clientHeight;
    var camera = new THREE.PerspectiveCamera(50, width / height, 0.01, 5000);
    var renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(width, height);

    container.appendChild(renderer.domElement);

    var obj: THREE.Group;
    var loader = new GLTFLoader();
    loader.load("../../assets/scene.gltf", function (gltf) {
        obj = gltf.scene;
        scene.add(gltf.scene);
    });
    renderer.setClearColor(0x000000, 0);

    var light3 = new THREE.AmbientLight(0xffffff, 0.7);
    var light4 = new THREE.AmbientLight(0xffffff, 0.9);
    light4.position.set(4, 10, 4);
    scene.add(light3, light4);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.panSpeed = 1;
    controls.rotateSpeed = 0.3;
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.enableZoom = false;
    controls.enabled = true;

    camera.position.x = 1.7;
    camera.position.y = 0.7;
    camera.position.z = 0;
    camera.rotation.set(30, 80, 0);

    window.addEventListener("resize", () => {
      width = container.clientWidth;
      height = container.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
  });

    function animate() {
        controls.update();
        requestAnimationFrame(animate);
        obj.rotation.y += 0.001;
        renderer.render(scene, camera);
    }

    animate();
}

}
