import { shaderMaterial } from '@react-three/drei';
import { extend } from '@react-three/fiber';

const RenderMaterial = shaderMaterial(
  { uPosition: null, uTexture: null },

  // vertex shader
  `
    attribute vec2 ref;
    varying vec2 vRef;
    uniform sampler2D uPosition;
    uniform sampler2D uTexture;
    uniform float uRotation;
    void main() {
        vRef = ref;
        vec3 position = texture2D(uPosition, ref).rgb;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
        gl_PointSize = 2.0;
    }
    `,
  // fragment shader
  `
    varying vec2 vRef;
    uniform sampler2D uTexture;
    uniform float uRotation;

    mat2 getRotationMatrix(float angle) {
      float s = sin(angle);
      float c = cos(angle);
      return mat2(c, -s, s, c);
  }

    void main() {
      vec2 centeredCoords = vRef - 0.5;
      vec2 rotatedCoords = getRotationMatrix(uRotation) *  centeredCoords;
      rotatedCoords += 0.5;
        vec3 color = texture2D(uTexture, rotatedCoords).rgb;

        gl_FragColor.rgba = vec4(color,0.9);
    }
    `
);

extend({ RenderMaterial });
