<template>
    <section>
        <h2>Dónde encontrarme</h2>
        <p>C/ Inca, Elche</p>
        <h5>{{ newsletter }}</h5>
        <template v-if="newsletter">
            <form action="">
                <h3>Newsletter</h3>
                <label for="correoe">Correo</label>
                <input type="email" placeholder="Tu correo" id="correoe">
            </form>
        </template>

    </section>
</template>

<script>
    export default {
        props: ['newsletter'],
    }
</script>