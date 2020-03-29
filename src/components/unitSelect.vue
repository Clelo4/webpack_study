<template>
  <div class="unit-select">
    <Select
      v-model="computedUnitValue"
      style="width: 80px;"
    >
      <Option
        v-for="item in selectOptions"
        :value="item.value"
        :key="item.value"
      >{{ item.label }}</Option>
    </Select>
  </div>
</template>

<script>
import { Options } from '@/config/unitOptions';

export default {
  name: 'unitSelect',
  data: function () {
    return {
      selectOptions: {}
    };
  },
  // 组件的v-model属性
  model: {
    prop: 'unitValue',
    event: 'update'
  },
  props: {
    // 单位类型
    unitType: {
      type: String,
      default: 'unitPrice'
    },
    // 单位值
    unitValue: {
      type: String
    },
    // 组件宽度
    width: {
      type: String,
      default: '8px'
    },
    // 是否允许选择
    enabled: {
      type: Boolean,
      default: false
    }
  },
  created () {
    // 根据unitType更新选择options
    this.selectOptions = Options[this.unitType];
  },
  computed: {
    // 将父组件的unitValue数据单向传递给computedUnitValue
    computedUnitValue: {
      get: function () {
        return this.unitValue;
      },
      set: function (v) {
      // 触发父组件的unitValue更新
        this.$emit('update', v);
      }
    }
  },
  components: {
  },
  methods: {
  }
};
</script>

<style lang="stylus" scoped>
.unit-select {
  display: inline-block;
}
</style>
