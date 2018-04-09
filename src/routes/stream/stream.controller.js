import StreamPlayer from '~/components/stream-player/stream-player.template';
import StreamStats from '~/components/stream-stats/stream-stats.template';
import { mapState, mapActions } from 'vuex';

export default {
    name: 'stream',
    computed: mapState(['stream']),
    methods: {
        getRandomStream () {
            this.$router.push('/loading');
            this.$store
                .dispatch('setRandomStream')
                .then((res) => {
                    this.$router.push('/stream');
                });
        }
    },
    components: {
        StreamPlayer,
        StreamStats
    }
}