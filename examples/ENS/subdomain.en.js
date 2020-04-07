//<![CDATA[
class Token {

    constructor(tokenInstance) {
        this.props = tokenInstance;
    }

    setup() {
        let namehash = require("eth-ens-namehash");
        let ensName = this.props.ensName;
        let subdomainElement = document.getElementById("subdomain");
        document.getElementById("node").innerHTML = namehash.hash(ensName);
        subdomainElement.addEventListener("keyup", function() {
            let subdomain = subdomainElement.value.toString().trim().toLowerCase();
            document.getElementById("subdomainHash").innerHTML = namehash.hash(subdomain + "." + ensName);
        });
    }

    render() {
        return`
        <div class="ui container">
          <div class="ui segment">
          <img src="data:image/png;base64,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">
          <span><bold><h3>Create a subdomain under <strong>${this.props.ensName}</strong></h3></bold></span>
          <input id="subdomain" type="text" placeholder=${"something." + this.props.ensName}><h3>${this.props.ensName}</h3>
          <h3>Owner of subdomain</h3>
          <input id="owner" type="text" value=${this.props.ownerAddress}/>
          <div id="subdomainHash" hidden></div>
          <div id="node" hidden></div>
          </div>
          <br>
        </div>`;
    }
}

web3.tokens.dataChanged = (oldTokens, updatedTokens, tokenCardId) => {
    const currentTokenInstance = updatedTokens.currentInstance;
    let token = new Token(currentTokenInstance);
    document.getElementById(tokenCardId).getElementsByClassName("contents")[0].innerHTML = token.render();
    token.setup();
};

//]]>
