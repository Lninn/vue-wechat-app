<<template> v
    <div class="page register-page Register js_show">
        <div class="page__hd">
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <a href="javascript:;" onclick="history.back();">
                        <i class="iconfont"></i>返回
                    </a>
                </div>
                <div class="weui-cell__bd">
                    <p>用户注册</p>
                </div>
            </div>
        </div>
        <div class="page__bd page__bd_spacing">
            <div class="weui-flex">
                <div class="weui-flex__item">
                    <div class="register-form weui-cells weui-cells_form">
                        <form id="register-form">
                            <div class="weui-cell el-center">
                                <div class="weui-cell__hd">
                                    <label class="weui-label">
                                        <p><i class="iconfont"></i></p>
                                    </label>
                                </div>
                                <div class="weui-cell__bd">
                                    <input class="weui-input" type="text" name="UserName" placeholder="请输入登陆名">
                                </div>
                            </div>

                            <div class="weui-cell el-center">
                                <div class="weui-cell__hd">
                                    <label class="weui-label">
                                        <p><i class="iconfont"></i></p>
                                    </label>
                                </div>
                                <div class="weui-cell__bd">
                                    <input class="weui-input" type="password" name="Password" placeholder="请输入密码">
                                </div>
                            </div>
                            <div class="weui-cell el-center">
                                <div class="weui-cell__hd">
                                    <label class="weui-label">
                                        <p><i class="iconfont"></i></p>
                                    </label>
                                </div>
                                <div class="weui-cell__bd">
                                    <input class="weui-input" type="password" name="ConfirmPasswod" placeholder="请再次输入密码">
                                </div>
                            </div>
                        </form>

                        <form id="complete-register-form" style="display: none;">
                            <div class="weui-cell el-center">
                                <div class="weui-cell__hd">
                                    <label class="weui-label">
                                        <p><i class="iconfont"></i></p>
                                    </label>
                                </div>
                                <div class="weui-cell__bd">
                                    <input class="weui-input" type="text" name="Name" placeholder="请输入真实姓名">
                                </div>
                            </div>
                            <div class="weui-cell el-center">
                                <div class="weui-cell__hd">
                                    <label class="weui-label">
                                        <p><i class="iconfont"></i></p>
                                    </label>
                                </div>
                                <div class="weui-cell__bd">
                                    <input class="weui-input" type="number" maxlength="11" name="Phone" placeholder="请输入联系方式">
                                </div>
                            </div>
                            <div class="weui-cell el-center">
                                <div class="weui-cell__hd">
                                    <label class="weui-label">
                                        <p><i class="iconfont"></i></p>
                                    </label>
                                </div>
                                <div class="weui-cell__bd">
                                    <input class="weui-input" type="text" name="Address" id="address" placeholder="请选择所在的地区">
                                </div>
                            </div>
                            <!-- <div class="weui-cell el-center">
                                <div class="weui-cell__bd">
                                    <textarea name="" id="AddressDetail" cols="35" rows="6" placeholder="详细地址：如道路、门牌号"></textarea>
                                </div>
                            </div> -->
                        </form>

                        <div class="weui-cell el-center cell-register">
                            <div class="weui-cell__hd"></div>
                            <div class="weui-cell__bd">
                                <div class="button-sp-area">
                                    <a href="javascript:;" class="weui-btn weui-btn_plain-default" data-id="register" id="id-register">下一步</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>