<script setup>

</script>


<template>
    <div>
        <div class="figure">
            <img src="https://myplaylist.vercel.app/static/media/elod.852037c1.png" alt="Pian Pian" />
            
        </div>
        <p>Pian Pian</p>
        <div>
            <audio src="https://myplaylist.vercel.app/static/media/elod.d2eebfc8.mp3" controls preload="metadata" ></audio>
        </div>
    </div>
</template>

<style scoped>

.figure {
    width: 280px;
    height: 200px;
    overflow: hidden;
    background-color: var(--gray-400);
}
img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

p {
    padding: var(--space-3);
}
</style>

