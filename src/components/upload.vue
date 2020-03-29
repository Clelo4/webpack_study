<template>
  <div>
    <Upload
      ref="upload"
      :show-upload-list="false"
      :on-success="handleSuccess"
      :on-error="handleError"
      :format="['jpg','jpeg','png']"
      :max-size="20480"
      :on-format-error="handleFormatError"
      :on-exceeded-size="handleMaxSize"
      :before-upload="handleBeforeUpload"
      type="select"
      name="file"
      :action="origin +'/api/upload/pic'"
    >
      <Button
        icon="ios-cloud-upload-outline"
        :style="{width: width}"
      >
        {{ palceholder }}
      </Button>
    </Upload>
  </div>
</template>

<script>

export default {
  name: 'Upload',
  props: {
    width: String,
    palceholder: {
      type: String,
      default: '上传'
    }
  },
  data: function () {
    return {
    };
  },
  computed: {
  },
  methods: {
    handleSuccess (response) {
      if (response.success && response.success === true) {
        var url = '/' + response.data.file;
        var status = 'finished';
        this.$emit('on-success', status, url);
      }
    },
    handleError () {
      this.$Message.error('上传失败');
    },
    handleFormatError () {
      this.$Message.error('格式不支持');
    },
    handleMaxSize () {
      this.$Message.error('文件大小超出');
    },
    handleBeforeUpload () {}
  }
};
</script>

<style lang="stylus" scoped></style>
