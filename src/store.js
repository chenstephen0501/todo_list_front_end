import { reactive } from "vue";

export const store = reactive({
    isAuthenticated: !!localStorage.getItem("accessToken"),
    logout () {
        localStorage.removeItem('accessToken');
        this.isAuthenticated = false;
    }
})