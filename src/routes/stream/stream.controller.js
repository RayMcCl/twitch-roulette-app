import StreamPlayer from '~/components/stream-player/stream-player.template';
import StreamStats from '~/components/stream-stats/stream-stats.template';
import { mapState, mapActions } from 'vuex';

export default {
    name: 'stream',
    computed: mapState(['stream']),
    beforeMount: function () {
        console.log('Test', this);
        if(Object.keys(this.stream.data).length === 0){
            this.getRandomStream();
        }
    },
    methods: {
        getRandomStream () {
            this.$router.push('/loading');
            this.$store
                .dispatch('setRandomStream')
                .then((res) => {
                    this.$router.push('/stream/' + this.stream.data.stream_name);
                });
        }
    },
    components: {
        StreamPlayer,
        StreamStats
    }
}