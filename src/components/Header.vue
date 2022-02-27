<template>
    <header>
        <div class="wrapper">
           <div class="header">
               <h1>Logo</h1>
           </div>
        </div>
    </header>
</template>

<style scoped>

header {
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
    margin-bottom: var(--space-8);
}

h1 {
    text-transform: uppercase;
    font-weight: 300;
    font-size: 1.6rem;
    letter-spacing: 3px;
    font-family: var(--logo-font);
    color: var(--primary);
}
.header {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;

}
</style>