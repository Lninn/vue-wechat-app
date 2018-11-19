<template>
    <div class="weui-cell">
        <div class="weui-cell__hd">
            <a v-if="showBtn" href="javascript:;" @click="back">
                <i class="iconfont"></i>返回
            </a>
        </div>
        <div class="weui-cell__bd" :class="textAlign">
            <p>{{ title }}</p>
        </div>
        <div class="weui-cell__ft">
            <slot></slot>                
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderBack',
    props: {
        title: {
            type: String,
            required: true,
        },
        showBtn: {
            type: Boolean,
            default: true,
        },
    },
    computed: {
        textAlign() {
            if (this.showBtn) {
                return 'text-align'
            } else {
                return ''
            }
        }
    },
    methods: {
        back() {
            this.$router.back()
        },
    },
}
</script>

<style lang="less" scoped>
.text-align {
    padding-right: 16%;
}
.weui-cell {
    padding: 10px 15px;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    .weui-cell__hd {
        a {
            position: relative;
            display: block;
            margin-left: auto;
            margin-right: auto;
            padding-right: 14px;
            box-sizing: border-box;
            font-size: 1em;
            text-align: center;
            text-decoration: none;
            color: #fff;
            border-radius: none;
            -webkit-tap-highlight-color: rgba(0,0,0,0);
            overflow: hidden;
            .iconfont {
                color: #fff;
            }
        }
    }
    .weui-cell__bd {
        margin-top: 0;
        background-color: #67baff;
        text-align: center;        
    }
}
</style>