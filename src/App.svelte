<script lang="ts">
    import RepeatButton from './components/RepeatButton.svelte';
    import RetryButton from './components/RetryButton.svelte';
    import Button from './components/Button.svelte';
    import {AiNovel} from './utilities/ai-novel';
    import { css } from '@emotion/css';
    import invariant from 'tiny-invariant';

    const aiNovel = new AiNovel();
    let statusText: string = '';
    let additional = false;

    aiNovel.setChangeHandler(() => {
        if (aiNovel.mode) {
            statusText = `[${aiNovel.mode}] ${aiNovel.clickCount} / ${aiNovel.maxCount}`
        } else {
            statusText = '未処理';
        }
    })
</script>

<div style="margin-left: 4em; margin-right: 4em;">
    <div>STATUS:{statusText}</div>
    <div>
        <Button on:notify={e => aiNovel.abort()} caption="中止" />    
        {#each [2,3,5,7,10] as count}
        <Button on:notify={e => { aiNovel.doRetry(count, additional); additional = false; }} caption={`リトライ x${count}`} />
        {/each}
        <label>
            追加リトライ
            <input type="checkbox" bind:checked={additional}>
        </label>
        </div>
        <div>
            <RetryButton on:notify={e => {aiNovel.doRetry(e.detail.retryCount, additional); additional = false; }} />
            </div>
            <div>
    <RepeatButton on:notify={e => aiNovel.doRepeat(e.detail.repeatCount)} />
    </div>
</div>
