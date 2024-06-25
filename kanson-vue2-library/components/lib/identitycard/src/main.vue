<template>
  <div class="my-card" :style="width ? { width: width + 'px' } : {}">
    <div class="my-card-img" :style="imgHeight ? { height: imgHeight + 'px' } : {}">
      <img id="img" :src="imgSrc ? imgSrc : 'detail.png'" alt="img" :style="{ objectFit: objectFit }" />
    </div>
    <div class="my-card-summary" v-if="summary">{{ summary }}</div>
    <div class="my-card-summary" v-else>
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "IdentityCard",
  props: {
    width: {
      //卡片宽度
      type: Number,
      default: 0,
    },
    imgSrc: {
      //卡片资源地址
      type: String,
      default: "",
    },
    imgHeight: {
      // 图片高度
      type: Number,
      default: 0,
    },
    objectFit: {
      type: String,
      default: "contain",
    },
    summary: {
      //卡片概要
      type: String,
      default: ''
    },
  },
  data() {
    return {
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>