<template>
    <main>
        <div class="page-width feed">
            <EventCard :event="fakeEvent" />
        </div>
    </main>
</template>

<script setup lang="ts">
    import EventCard from '@/components/EventCard.vue'
    
    const fakeEvent = {
        id: '123abc',
        title: 'Fake Event',
        description: 'This is a fake event',
        images: ['https://via.placeholder.com/300'],
        date: '2022-12-31',
        owner: {
            id: '456def',
            name: 'Fake Company',
            avatar: 'https://via.placeholder.com/20',
            verified: true,
            contactLink: 'https://instagram.com/tonchiserra',
            description: 'This is a fake company',
            email: 'tonchiserra@gmail.com',
        },
        categories: ['fake', 'event'],
        cta: 'https://google.com'
    }

</script>

<style lang="scss" scoped>
    .feed {
        display: grid;
        grid-template-columns: 1fr;
        gap: 16px;
    }
</style>