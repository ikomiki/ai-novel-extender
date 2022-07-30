export class AiNovel {
  clickCount = 0;
  maxCount = 3;
  mode: string | null; // : "getcontinuation" | "retry" | null = null;
  originalFetch: typeof window.fetch;
  waitMs = 3000;
  handler: NodeJS.Timeout | undefined;

  constructor() {
    // this.setFetch();
  }

  // private setFetch() {
  //   this.originalFetch = window.fetch;

  //   window.fetch = (resource: string, init: { body: any } = { body: {} }) => {
  //     console.log("window.fetch", resource, init);
  //     try {
  //       if (resource.indexOf(".coreweave.cloud/") >= 0) {
  //         // バックエンド接続時のリクエストを読んで送信テキストに設定
  //         const json_data = JSON.parse(init.body);
  //         console.log("coreweave.cloud", json_data);
  //       } else if (resource.indexOf("getrequest_v5.php") >= 0) {
  //         // フロントエンド接続時のリクエストを読んで、前回と本文が変わっていたら履歴の履歴を順送りする
  //         const data = init.body.get("data");
  //         console.log("getrequest_v5", data);
  //       } else if (resource.indexOf("_remotestories.php") >= 0) {
  //         // リモート保存時の日時を記録する
  //         const now = new Date();
  //         console.log("_remotestories");
  //       }
  //       return this.originalFetch(resource, init).then((res) => {
  //         console.log("window.fetch res", res);
  //         if (res.url.indexOf(".coreweave.cloud/") >= 0) {
  //           // バックエンド接続時のレスポンスをトリガーに、出力を履歴の履歴に追加する
  //           /*res.clone().json().then(json_data => {
  //                         historyStack[0].push(json_data.data.text)
  //                         console.log(historyStack)
  //                         updateHisotry()
  //                     })*/
  //           setTimeout(this.buttonChecker.bind(this), 100);
  //         }
  //         return res;
  //       });
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  // }

  buttonChecker() {
    const continuationButton = this.getcontinuation;
    if (continuationButton) {
      this.clickCount++;
      if (this.maxCount > this.clickCount) {
        if (this.mode === "getcontinuation") {
          alert("続きボタンを押す");
          this.handler = setTimeout(() => {
            continuationButton.click();
            this.startWait();
          }, this.waitMs);
        } else if (this.mode === "retry") {
          const retryButton = this.retry;
          this.handler = setTimeout(() => {
            retryButton.click();
            this.startWait();
          }, this.waitMs);
        } else if (this.mode === null) {
          if (this.handler) {
            this.abort();
            console.info("繰り返し処理は中断されました。");
          }
        } else {
          console.warn(`wrong mode: ${this.mode}`);
        }
        // setTimeout(buttonChecker, 100);
      } else {
        this.abort();
        console.log("リトライ完了");
      }
    } else {
      setTimeout(() => this.buttonChecker(), 100);
    }
  }

  // resetFetch() {
  //   if (this.originalFetch) {
  //     window.fetch = this.originalFetch;
  //     this.originalFetch = undefined;
  //   }
  // }

  get getcontinuation(): HTMLInputElement {
    return document.getElementById("getcontinuation") as HTMLInputElement;
  }

  get retry(): HTMLInputElement {
    return document.getElementById("retry") as HTMLInputElement;
  }

  doRepeat(repeatCount: number) {
    console.log("doRepeat", repeatCount);
    this.clickCount = 0;
    this.maxCount = repeatCount;
    this.mode = "getcontinuation";
    this.getcontinuation.click();
    this.startWait();
  }

  doRetry(retryCount: number) {
    console.log("doRetry", retryCount);
    this.clickCount = 0;
    this.maxCount = retryCount;
    this.mode = "retry";
    this.getcontinuation.click();
    this.startWait();
  }

  startWait() {
    if (this.handler !== null) {
      clearTimeout(this.handler);
      this.handler = null;
    }
    const wait = () => {
      if (document.getElementById("loading_anim").style.display == "none") {
        console.log("執筆終了");
        this.buttonChecker();
      } else {
        this.handler = setTimeout(() => wait(), 1000);
      }
    };
    wait();
  }

  abort() {
    this.mode = null;
    if (this.handler !== null) {
      clearTimeout(this.handler);
      this.handler = null;
    }
  }
}
