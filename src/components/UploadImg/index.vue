<template>
    <div>
        <PreviewImg :url="currentPreview" @previewClick="onPreviewClick" />
        <div class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <div class="weui-uploader">
                        <div class="weui-uploader__hd">
                            <p class="weui-uploader__title">上传图片<span>(jpg、png、gif)</span></p>
                            <div class="weui-uploader__info">{{ uploaderCount }}</div>
                        </div>
                        <div class="weui-uploader__bd">
                            <ul class="weui-uploader__files">
                                <ImgItem v-for="(url, index) in urls" :key="index" :url="url" @click="onClick(url)" />                                
                            </ul>
                            <div class="weui-uploader__input-box">
                                <input @change="uploaderInput" class="weui-uploader__input" type="file" accept="image/*" multiple="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ImgItem from './ImgItem'
import PreviewImg from './PreviewImg'

export default {
  name: 'UploadImg',
  components: { ImgItem, PreviewImg, },
  data() {
    return {
        urls: [],
        max: 3,
        count: 0,
        currentPreview: '',
    }
  },
  computed: {
    uploaderCount() {
        return `${this.count}/${this.max} 张`
    },
  },
  methods: {
    uploaderInput(event) {
        let url = window.URL || window.webkitURL || window.mozURL
        let files = event.target.files
        if (!this.caleCount(files.length)) {
            return
        }
        
        this.urls = [].concat(this.urls, Array.from(files).map(file => {
            let src
            if(url) {
                src = url.createObjectURL(file)
            } else {
                src = event.target.result
            }
            return src
        }))

        this.$emit('upload', this.urls)
    },
    caleCount(num) {
        if (num + this.count > 3) {
            return false
        } else {
            this.count += num
            return true
        }
    },
    onClick(url) {
        this.currentPreview = url
    },
    onPreviewClick(type) {
        if (type === 'hide') {
            this.currentPreview = ''
        } else if (type === 'delete') {
            this.urls = this.urls.filter(url => url !== this.currentPreview)
            this.currentPreview = ''
            this.count -= 1
        }
    }
  }
}
</script>