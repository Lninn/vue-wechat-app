<template>
  <div>
    <div class="weui-gallery" :style="previewStyle" @click="isPreview = false">
        <span class="weui-gallery__img" :style="{ backgroundImage: 'url(' + currentImage.path +  ')' }" ></span>
    </div>
    <div class="weui-cells weui-cells_form">
        <div class="weui-cell">
            <div class="weui-cell__bd">
                <div class="weui-uploader">
                    <div class="weui-uploader__hd">
                        <p class="weui-uploader__title">{{ title }}</p>
                        <div class="weui-uploader__info"></div>
                    </div>
                    <div class="weui-uploader__bd">
                        <ul
                            class="weui-uploader__files"
                            v-for="(image, index) in list"
                            :key="index"
                        >
                            <li
                                class="weui-uploader__file"
                                :style="{ backgroundImage: 'url(' + image.path +  ')' }"
                                @click="preview(image)"
                            ></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppPreviewImage',
  props: {
    title: {
      type: String,
      required: true,
    },
    list: {
        type: Array,
    },
  },
  data() {
      return {
          isPreview: false,
          currentImage: '',
      }
  },
  computed: {
      previewStyle() {
          if (this.isPreview) {
              return { display: 'block', }
          } else {
              return { display: 'none', }
          }
      },
  },
  methods: {
      preview(image) {
          this.isPreview = true
          this.currentImage = image
      },
  },
}
</script>