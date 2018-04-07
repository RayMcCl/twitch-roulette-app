import StreamPlayer from '~/components/stream-player/stream-player.template';

export default {
    name: 'stream',
    props: {
        stream_name: 'Test'
    },
    computed: {
        getStreamName: function () {
            return this.$route.params.stream_name;
        }
    },
    components: {
        StreamPlayer
    },
}