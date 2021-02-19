<template>
    <div>
        <nav class="nav">
            <div class="container">
                <div class="row">
                    <div class="col-3">
                        <div class="logo">
                            <ul>
                                <li>
                                    <a href="">
                                        <img src="../../assets/images/logo-app.png" height="55" width="165"/>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div class="col-9">
                        <div class="nav-items">
                            <ul>
                                <li v-for="item in navItems">
                                    <a href="#">
                                        {{item}}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "navbar",
        data() {
            return {
                navItems: ["о компании", "вопрос-ответ", "контакты", "военные новости"],
                btn_value: "MyBtn",
            }

        }
    }
</script>
