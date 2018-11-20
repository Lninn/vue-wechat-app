<template>
   <div id="parameter" class="weui-panel weui-panel_access">
       <div class="weui-panel__bd">
          <template v-for="parameter in params">
            <div class="weui-media-box weui-media-box_text informations" :key="parameter.id">
                <h4 class="weui-media-box__title">{{ parameter.title }}</h4>
                <ul class="weui-media-box__info" v-for="child in parameter.children"  :key="child.id">
                    <li class="weui-media-box__info__meta">{{ child.name }}</li>
                    <li class="weui-media-box__info__meta weui-media-box__info__meta-msg">{{ child.text }}</li>
                </ul>
            </div>
        </template>
    </div>
</div>
</template>

<script>
export default {
    name: 'Parameter',
    props: {
        params: {
            type: Array,
            required: true,
        },
    },
}
</script>

<style lang="less" scoped>
#parameter {
    background-color: #fff;
    position: relative;
    div.informations::before {
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 1px;
        border-top: 1px solid transparent;
        color: transparent;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
        left: 15px;
    }
    h4 {
        display: block;
        position: relative;
        padding-bottom: 10px;
        padding-left: 16px;
        &:after {
            content: " ";
            position: absolute;
            left: 0;
            bottom: 0;
            right: 0;
            height: 1px;
            border-top: 1px solid #676767;
            color: #676767;
            -webkit-transform-origin: 0 0;
            transform-origin: 0 0;
            -webkit-transform: scaleY(0.5);
            transform: scaleY(0.5);
            left: 15px;            
      }
  }
}

.weui-media-box__info__meta-msg {
    width: 60%;
    letter-spacing: 1px;
    line-height: 1.3rem;
}

.informations .weui-media-box__info {
    font-size: 15px;            
    color: #000;
    padding-bottom: 15px;
    position: relative;
    padding-left: 1rem;
    li:first-child {
        width: 30%;
    }
    li:last-child {
        width: 55%;
    }
}
</style>