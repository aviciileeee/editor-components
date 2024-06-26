import { defineConfig } from 'rollup'
import pkg from './package.json' assert { type: "json"}

import typescript from 'rollup-plugin-typescript2'
import json from '@rollup/plugin-json'
import vuePlugin from 'rollup-plugin-vue'
import css from "rollup-plugin-css-only"
import nodeResolve from '@rollup/plugin-node-resolve'

const fileName = type => `dist/${pkg.name}.${type}.js`
const overrides = {
  compilerOptions: { declaration: true },
}
export default defineConfig({
  input: './src/index.ts',
  output: [
    {
      name: pkg.name,
      file: fileName('esm'),
      format: 'esm'
    },
    {
      name: 'EditorComponents',
      file: fileName('umd'),
      format: 'umd',
      globals: {
        'vue': 'Vue',
        'lodash-es': '_'
      },
      exports: 'named'
    }
  ],
  external: ['vue'],
  plugins: [
    json(),
    nodeResolve(),
    vuePlugin(),
    css({
      output: 'bundle.css'
    }),
    typescript({
      tsconfigOverride: overrides
    }),
  ]
})