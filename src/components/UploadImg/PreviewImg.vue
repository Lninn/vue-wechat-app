<template>
   <div class="weui-gallery" id="gallery" :style="showStyle">
        <span @click="hideImg" class="weui-gallery__img" :style="styles"></span>
        <div class="weui-gallery__opr" @click="delImg">
            <a href="javascript:" class="weui-gallery__del">
                <i class="weui-icon-delete weui-icon_gallery-delete"></i>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PreviewImg',
    props: {
        url: {
            type: String,
            required: true,
        },
    },
    computed: {
        styles() {
            return {
                backgroundImage: `url(${this.url})`,
            }
        },
        showStyle: {
            get() {
                if (this.url) {
                    return {
                        display: 'block',
                    }
                } else {
                    return ''
                }
            },
            set(val) {
                return {
                    display: val,
                }
            }
        },
    },
    methods: {
        hideImg() {
            this.$emit('previewClick', 'hide')
        },
        delImg() {
            this.$emit('previewClick', 'delete')
        }
    },
}

// $galleryImg.on("click", function(){
//     $gallery.fadeOut(100);
// });
// $galleryDel.on('click', function() {
//     const style = document.querySelector('#gallery').querySelector('span').getAttribute('style')
//     Array.from(uploaderFiles.querySelectorAll('li')).forEach(li => {
//         if (li.getAttribute('style') === style) {
//             li.parentNode.removeChild(li)
//         }
//     })
//     uploaderCountElem.innerHTML = uploaderFiles.querySelectorAll('li').length + '/3 张'
//     $gallery.fadeOut(100)
</script>

<style lang="less">
</style>