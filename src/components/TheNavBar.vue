<template>
    <div>
        <v-list dense>
            <v-list-item link v-if="!isLoggedIn">
                <v-list-item-action>
                    <v-icon>mdi-login</v-icon>
                </v-list-item-action>
                      <Login/>
            </v-list-item>
            <v-list-item link>
                <v-list-item-action>
                    <v-icon>mdi-view-dashboard</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        <router-link class="v-btn" to="/crm/reports/">Отчеты фото</router-link>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item link>
                <v-list-item-action>
                    <v-icon>mdi-view-dashboard</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        <router-link class="v-btn" to="/crm/video_reports/">Отчеты видео</router-link>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item link>
                <v-list-item-action>
                    <v-icon>mdi-cog</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        <router-link class="v-btn" to="/crm/clients/">Клиенты</router-link>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item link>
                <v-list-item-action>
                    <v-icon>mdi-account-multiple-outline</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        <router-link class="v-btn" to="/crm/deals/">Сделки</router-link>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item link>
                <v-list-item-action>
                    <v-icon>mdi-cog</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        <router-link class="v-btn" to="/crm/csv/">csv</router-link>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </div>
</template>

<script>
    import Login from "@/components/Login";
    export default {
        name: "TheNavBar",
        components: {Login},
        computed: {
            isLoggedIn: function () {
                return this.$store.getters.isLoggedIn
            },
        }
    }
</script>

<style scoped>

</style>