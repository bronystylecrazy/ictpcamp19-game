<template>
    <div class="home">
        <v-container></v-container>
    </div>
</template>

<script>
import swal from "sweetalert2";
import axios from "axios";

export default {
    data: () => ({
        items: []
    }),
    methods: {
        async popup() {
            await swal.fire({
                title: "Hello World"
            });
            await swal.fire({
                title: "Hello World"
            });
        }
    },
    async created() {
        const { data } = await axios(
            "https://jsonplaceholder.typicode.com/comments"
        );
        this.items = data;
        console.log(data);
    }
};
</script>