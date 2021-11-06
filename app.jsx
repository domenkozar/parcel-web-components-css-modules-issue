import { LazyLog, ScrollFollow } from 'react-lazylog';
import ReactDOM from "react-dom";
import React from "react";

class LogViewer extends HTMLElement {
    connectedCallback() {
      this.mountPoint = document.createElement('div');
      this.appendChild(this.mountPoint);

      const url = this.getAttribute('url');

      ReactDOM.render(
        <ScrollFollow
            startFollowing={true}
            render={({ follow, onScroll }) => (
              <LazyLog url={url} height={800} width={900} enableSearch stream follow={follow} onScroll={onScroll}></LazyLog> 
            )}
        />
        , this.mountPoint);
    }
  }

customElements.define('log-viewer', LogViewer);