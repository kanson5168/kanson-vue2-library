<template>
  <div>
    <div class="my-card" :style="width ? { width: width + 'px' } : {}">
      <div class="my-card-img" :style="imgHeight ? { height: imgHeight + 'px' } : {}">
        <img id="img" :src="imgSrc ? imgSrc : ''" :style="{ objectFit: objectFit }" />
      </div>
      <div class="my-card-summary" v-if="summary">{{ summary }}</div>
      <div class="my-card-summary" v-else>
        <slot></slot>
      </div>
      <slot name="footer"></slot>
    </div>
    <table border="1px solid gray" align="center" cellspacing=0 id="table">
      <tbody align="center" valign="center">
        <tr>
          <th width="150px">参数</th>
          <th width="150px">说明</th>
          <th width="150px">类型</th>
          <th width="150px">是否必要</th>
        </tr>
        <tr>
          <td width="150px">width</td>
          <td width="150px">卡片宽度</td>
          <td width="150px">Number</td>
          <td width="150px">False</td>
        </tr>
        <tr>
          <td width="150px">imgSrc</td>
          <td width="150px">图片资源地址</td>
          <td width="150px">String</td>
          <td width="150px">True</td>
        </tr>
        <tr>
          <td width="150px">imgHeight</td>
          <td width="150px">图片高度</td>
          <td width="150px">Number</td>
          <td width="150px">False</td>
        </tr>
        <tr>
          <td width="150px">summary</td>
          <td width="150px">卡片概述</td>
          <td width="150px">String/slot</td>
          <td width="150px">False</td>
        </tr>
        <tr>
          <td width="150px">footer</td>
          <td width="150px">卡片底部</td>
          <td width="150px">String/slot</td>
          <td width="150px">False</td>
        </tr>
        <tr>
          <td width="150px">objectFit</td>
          <td width="150px">图片object-fit</td>
          <td width="150px">String</td>
          <td width="150px">False</td>
        </tr>
      </tbody>
    </table>
    <button type="button" id="btn-de" @click="deleteTipsimg">点击删除示例</button>
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
  created() {
  },
  data() {
    return {
    };
  },
  methods: {
    deleteTipsimg() {
      document.getElementById('table').style = 'display:none'
      document.getElementById('btn-de').style = 'display:none'
    }
  },
};
</script>

<style lang="scss" scoped></style>