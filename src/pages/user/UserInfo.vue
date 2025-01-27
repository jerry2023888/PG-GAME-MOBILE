<template>
    <div>
        123
    </div>
</template>

<script setup lang="ts">
import { getUserInfo } from "@/api/userApi";

/* --- API requests --- */
const { fetch, data, loading, error } = getUserInfo();
</script>