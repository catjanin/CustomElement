import CustomElement from "./lib/CustomElement2.js";

class subEl extends CustomElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
        this.state = {
            is: "ok",
        };

        shadowRoot.innerHTML = `<div data-bind="state.is"></div>`;
    }

    onInit() {
        
        //console.log(this.dispatchEvent)
    }

    onRender() {
        this.props.sayHi();
        //console.log(this.getRootNode().host.shadowRoot.innerHTML)
    }
}

customElements.define("sub-el", subEl);

export class DemoElement extends CustomElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: "open" });
        this.state = {
            showCart: false,
            displayName: true,
            displayTitle: true,
            title: "lul",
            user: {
                class: "color-red",
                name: "A name",
                lastname: "rc",
                address: {
                    city: "A city",
                },
            },
            rclass: "rezrzrzr",
            pets: ['<sub-el props="sayHi pets=state.pets"></sub-el>', '<sub-el props="sayHi pets=state.pets"></sub-el>', "fish"],
        };

        shadowRoot.innerHTML = `
        <style>
            .color-red {
                color: red;
            }
            .underline {
                text-decoration: underline;
            }
            .text-big {
                font-size: 5em;
            }
            .dtitle {
                font-size: 500%;
            }
        </style>
      <template id="template">
        <p id="template-content">This is the content of the template</p>
      </template>
      
      <div id="container">
        <h1>hi <span data-bind="state.displayName : state.user.name" ></span></h1>
        <h3 loop="item of state.pets"><div><p loop-item>hey</p></div><p data-bind="state.title">you</p></h3>
        <p data-bind="state.title" id="title"></p>
        
        <h3>user.name</h3>
        <h2 data-bind="state.user.name" class-bind="state.displayName : color-red, state.displayTitle: dtitle, state.rclass" class="underline random-class" id="name"></h2>
        
        <h3 class-bind="user.class">user.address.city</h3>
        <p on-mouseover="hoveredP" data-bind="state.user.address.city" id="city"></p>
        
        <h3 ref="h3title" on-click="clickedH3" data-bind="state.title"></h3>
        <sub-el props="sayHi pets=state.pets"></sub-el>
        <form on-submit="submitthatform">
            <input type="checkbox" name="yes">
            <button type="submit">send</button>
        </form>
        <div if-bind="state.showCart">cart<div>items : 3</div></div>
      </div>
        `;
    }

    onRender() {
        /*
        this.setStateTitle("TITLKE");
        this.setStateUserAddressCity("LA");
        this.setStateUserName("wadaheck");
        this.setStateUserName("wadaheck2");
        this.setStateUserClass("text-big");*/
        //this.setState(["state.displayName", true]);
        this.setState(["state.displayTitle", true], ["state.displayName", false]);
        this.setState("state.displayName", true)
        this.setState("state.user.name", "exdeexd")
    }

    sayHi() {
        console.log("hi");
    }

    clickedH3(evt) {
        evt.preventDefault();
        console.log("wadup", evt);
    }

    hoveredP(evt) {
        evt.preventDefault();
        console.log("hover", evt);
    }

    submitthatform(evt) {
        evt.preventDefault();
        console.log("submit", Object.fromEntries(new FormData(evt.target)))
    }

    downdown(evt) {
        console.log("mousedown sub-el", evt)
    }

    upup(evt) {
        console.log("mouseup sub-el", evt)
        console.log(this.refs)
    }
}

customElements.define("demo-element", DemoElement);
