<script lang="ts">
import { transformToComponentProps, textDefaultProps } from '../../defaultProps'
const defaultProps = transformToComponentProps(textDefaultProps)
</script>

<script lang="ts" setup>
import { defineProps, defineOptions } from 'vue'
import { textStylePropNames } from '../../defaultProps'
import useComponentCommon from '../../hooks/useComponentCommon'
const props = defineProps({
  tag: {
    type: String,
    default: 'div'
  },
  ...defaultProps
})
defineOptions({
  name: 'LText'
})
const {styleProps, handleClick } = useComponentCommon(props, textStylePropNames)
</script>
<template>
<component :is="props.tag" :style="styleProps" class="l-text-component" @click="handleClick">
  {{ props.text }}
</component>
</template>