<template>
        <div id="navbar">
            <v-app-bar
            app
            clipped-left
            >
            <router-link to="/">
            <v-toolbar-title>
                <img v-if="dark_mode" src="../assets/jahid-logo-wht.svg" alt="Logo" width="150">
                <img v-else src="../assets/jahid-logo.svg" alt="Logo" width="150">
            </v-toolbar-title>
            </router-link>

            <v-spacer></v-spacer>

            <v-btn text :to="{ path: 'about' }">
                About
            </v-btn>

            <v-btn text>
                Portfolio
            </v-btn>

            <v-btn text >
                Contact
            </v-btn>
            
            <v-btn icon v-on:click="changeTheme">
                <v-icon>mdi-theme-light-dark</v-icon>
            </v-btn>
            </v-app-bar>
            <v-progress-linear
            :active="loading"
            :indeterminate="loading"
            absolute
            top
            color="deep-purple  accent-4"
        ></v-progress-linear>
        </div>
</template>

<style lang="scss" scoped>

</style>

<script>
export default {
    name: 'Navbar',
    data: function () {
        return {
            dark_mode: this.$vuetify.theme.dark,
            loading: true,
        }
    },
    methods: {
        onEnlargeText: function (enlargeAmount) {
        this.postFontSize += enlargeAmount
        },

        changeTheme: function (){
            this.dark_mode =! this.dark_mode
            this.$vuetify.theme.dark =! this.$vuetify.theme.dark
        },

        getLogo: function (){
            return this.$vuetify.theme.dark ? "../assets/"+this.logo_lite : "../assets/"+this.logo_dark
            console.log(this.$vuetify.theme.dark ? "../assets/"+this.logo_lite : "../assets/"+this.logo_dark)
        }
    
    }

}
</script>