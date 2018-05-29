<template>
    <div>
        <h1>{{msg2}}</h1>
        <p>{{$store.state.a.count}} -- {{count}}</p>
        <div>
            <!--不用mapMutations <button @click="$store.commit('add',10)">+</button>
            <button @click="$store.commit('reduce')">-</button> -->
            <!-- <button @click="add(10)">+</button>
            <button @click="reduce()">-</button> -->
            <button @click="addAction">+</button>
            <button @click="reduceAction">-</button>
        </div>
    </div>
</template>

<script>
    import store from './vuex/store'
    import { mapState,mapMutations,mapGetters, mapActions } from 'vuex';

    export default {
        name : 'Count',
        data(){
            return {
                msg2 : 'Hello vuex!'
            }
        },
        /* computed:{  //第一种写法
            count(){
                return this.$store.state.a.count
            }
        }, */
        /* computed :mapState({ //第二种写法
            count :state => state.count
        }), */
        computed : {
            ...mapState(["count"]),
            ...mapGetters(["count"])
        },
        methods:{...mapMutations(['add','reduce']),...mapActions(['addAction','reduceAction'])},
        store
    }
</script>

<style scoped>

</style>