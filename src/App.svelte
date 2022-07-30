<script lang="ts">
    import RepeatButton from './components/RepeatButton.svelte';
    import RetryButton from './components/RetryButton.svelte';
    import {AiNovel} from './utilities/ai-novel';
    import { css } from '@emotion/css';
    import invariant from 'tiny-invariant';

    const body = css`
        .body {
            text-align: center;
        }
    `;
    const aiNovel = new AiNovel();
    
    function handleRepeat(event: CustomEvent<{
        repeatCount: number,
    }>) {
        const detail = event.detail;
        alert(`repeat count: ${detail.repeatCount} ${typeof detail.repeatCount}`)
        aiNovel.doRepeat(detail.repeatCount);
    }
    
    function handleRetry(event: CustomEvent<{
        retryCount: number,
    }>) {
        const detail = event.detail;
        alert(`retry count: ${detail.retryCount} ${typeof detail.retryCount}`)
        aiNovel.doRetry(detail.retryCount);
    }

</script>

<div>
    ほげほげ
    <RepeatButton on:notify={handleRepeat} />
    <RetryButton on:notify={handleRetry} />
</div>
