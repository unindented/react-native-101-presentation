/* eslint-disable import/no-webpack-loader-syntax */

import React, { Component } from "react";
import {
  Appear,
  CodePane,
  ComponentPlayground,
  Deck,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Notes,
  Slide,
  Table,
  TableBody,
  TableItem,
  TableRow,
  Text
} from "spectacle";
import createTheme from "spectacle/lib/themes/default";
import * as palette from "./palette";

const reactImage = require("./assets/react.svg");
const iosImage = require("./assets/ios.png");
const facebookImage = require("./assets/facebook.png");
const instagramImage = require("./assets/instagram.png");
const airbnbImage = require("./assets/airbnb.png");
const skypeImage = require("./assets/skype.png");

const propsSnippet = require("!raw-loader!./snippets/props.txt");
const classSnippet = require("!raw-loader!./snippets/class.txt");
const compositionSnippet = require("!raw-loader!./snippets/composition.txt");
const stateSnippet = require("!raw-loader!./snippets/state.txt");
const nativeSnippet = require("!raw-loader!./snippets/native.txt");
const nativeBootstrapSnippet = require("!raw-loader!./snippets/nativeBootstrap.txt");

const theme = createTheme(
  {
    primary: palette.ocean,
    secondary: palette.stream,
    tertiary: "rgba(0, 0, 0, 0.5)"
  },
  {
    primary: "Segoe UI",
    secondary: "Lucida Grande",
    tertiary: "Inconsolata"
  }
);

export default class Presentation extends Component {
  render() {
    return (
      <Deck theme={theme}>
        <Slide>
          <Heading size={1} fit textColor="secondary">
            React Native<br />101
          </Heading>
          <Notes>
            Welcome to this learning session on React Native. I'm Daniel.
          </Notes>
        </Slide>
        <Slide>
          <Image src={reactImage} height="80vh" />
          <Notes>
            Just a quick clarification before we cover anything else. When
            people talk about React, they're probably talking about React DOM,
            which is the React renderer that renders to DOM elements on a
            website. But they're actually two separate libraries. The React
            library itself doesn't dictate where to render, it's totally
            agnostic. React DOM is the library that renders React elements to
            the DOM, and React Native is the library that renders React elements
            to native platforms.
            <br />
            Ok, with that out of the way, let's get to it.
          </Notes>
        </Slide>
        <Slide>
          <Heading size={2} fit textColor="secondary">
            Quick intro to<br />React (DOM)
          </Heading>
        </Slide>
        <Slide>
          <Heading size={3} margin="0 0 40px" textColor="secondary">
            f(props) => HTML
          </Heading>
          <ComponentPlayground code={propsSnippet} theme="light" />
          <Notes>
            React components are the basic unit of abstraction in React. They
            are like JavaScript functions. They accept arbitrary inputs (called
            props) and return elements describing what should appear on the
            screen.
          </Notes>
        </Slide>
        <Slide>
          <Heading size={3} margin="0 0 40px" textColor="secondary">
            f(props) => HTML
          </Heading>
          <ComponentPlayground code={classSnippet} theme="light" />
          <Notes>You can also use an ES6 class to define a component.</Notes>
        </Slide>
        <Slide>
          <Heading size={3} margin="0 0 40px" textColor="secondary">
            g(f(props)) => HTML
          </Heading>
          <ComponentPlayground code={compositionSnippet} theme="light" />
          <Notes>
            You can create components that are made up of other components. This
            lets us use the same component abstraction for any level of detail.
          </Notes>
        </Slide>
        <Slide>
          <Heading size={3} margin="0 0 40px" textColor="secondary">
            f(props, state) => HTML
          </Heading>
          <ComponentPlayground code={stateSnippet} theme="light" />
          <Notes>
            Props are read-only, you cannot modify them. So how do we create UIs
            that are dynamic and change over time? By introducing local state.
          </Notes>
        </Slide>
        <Slide>
          <Heading size={2} fit textColor="secondary">
            Quick intro to<br />React Native
          </Heading>
        </Slide>
        <Slide>
          <Heading size={3} margin="0 0 40px" textColor="secondary">
            f(props, state) => *
          </Heading>
          <ComponentPlayground code={nativeSnippet} theme="light" />
          <Notes>
            Conceptually, React Native is like React DOM, but instead of
            outputting HTML elements, it outputs native iOS and Android
            elements. There are projects to also output native Windows elements,
            or even HTML!
            <br />
            I can't run this demo in the browser, so let's turn to the
            simulator.
          </Notes>
        </Slide>
        <Slide>
          <Image src={iosImage} height="80vh" />
          <Notes>We just need to start the bundler, and run the app.</Notes>
        </Slide>
        <Slide>
          <Heading size={3} margin="0 0 40px" textColor="secondary">
            DOM vs Native
          </Heading>
          <Table bgColor="tertiary" padding="20px">
            <TableBody>
              <TableRow>
                <TableItem>
                  <Text textColor="secondary" textFont="tertiary">
                    &lt;div /&gt;
                  </Text>
                </TableItem>
                <TableItem>
                  <Text textColor="secondary" textFont="tertiary">
                    &lt;View /&gt;
                  </Text>
                </TableItem>
              </TableRow>
              <TableRow>
                <TableItem>
                  <Text textColor="secondary" textFont="tertiary">
                    &lt;span /&gt;
                  </Text>
                </TableItem>
                <TableItem>
                  <Text textColor="secondary" textFont="tertiary">
                    &lt;Text /&gt;
                  </Text>
                </TableItem>
              </TableRow>
              <TableRow>
                <TableItem>
                  <Text textColor="secondary" textFont="tertiary">
                    &lt;button /&gt;
                  </Text>
                </TableItem>
                <TableItem>
                  <Text textColor="secondary" textFont="tertiary">
                    &lt;Touchable /&gt;
                  </Text>
                </TableItem>
              </TableRow>
              <TableRow>
                <TableItem>
                  <Text textColor="secondary" textFont="tertiary">
                    &lt;img /&gt;
                  </Text>
                </TableItem>
                <TableItem>
                  <Text textColor="secondary" textFont="tertiary">
                    &lt;Image /&gt;
                  </Text>
                </TableItem>
              </TableRow>
              <TableRow>
                <TableItem>
                  <Text textColor="secondary" textFont="tertiary">
                    fetch
                  </Text>
                </TableItem>
                <TableItem>
                  <Text textColor="secondary" textFont="tertiary">
                    fetch
                  </Text>
                </TableItem>
              </TableRow>
              <TableRow>
                <TableItem>
                  <Text textColor="secondary" textFont="tertiary">
                    WebSocket
                  </Text>
                </TableItem>
                <TableItem>
                  <Text textColor="secondary" textFont="tertiary">
                    WebSocket
                  </Text>
                </TableItem>
              </TableRow>
              <TableRow>
                <TableItem>
                  <Text textColor="secondary" textFont="tertiary">
                    localStorage
                  </Text>
                </TableItem>
                <TableItem>
                  <Text textColor="secondary" textFont="tertiary">
                    AsyncStorage
                  </Text>
                </TableItem>
              </TableRow>
            </TableBody>
          </Table>
          <Notes>
            Notice how the networking primitives are exactly the same.
          </Notes>
        </Slide>
        <Slide>
          <Heading size={3} margin="0 0 40px" textColor="secondary">
            Y THO
          </Heading>
          <Notes>
            For me, it's about two things:
            <br />
            You can share as much or as little code as you want between your
            clients. They share language and some other things, like the
            networking primitives. To me, it makes a lot of sense to at least
            share the data layer between all platforms (web, iOS and Android).
            It probably makes a lot of sense to also share quite a few views
            between mobile platforms (iOS and Android).
            <br />
            The developer experience is also really nice. Having your app
            live-reload as you edit your files is a great improvement over
            compiling native code with Xcode or Gradle every five minutes.
          </Notes>
        </Slide>
        <Slide>
          <Heading size={3} margin="0 0 40px" textColor="secondary">
            Who's using<br />React Native?
          </Heading>
          <Appear>
            <Image display="inline" margin="0 20px" src={facebookImage} />
          </Appear>
          <Appear>
            <Image display="inline" margin="0 20px" src={instagramImage} />
          </Appear>
          <Appear>
            <Image display="inline" margin="0 20px" src={airbnbImage} />
          </Appear>
          <Appear>
            <Image display="inline" margin="0 20px" src={skypeImage} />
          </Appear>
          <Notes>
            Quite a few companies outside of Facebook: Airbnb, Microsoft,
            Walmart, Bloomberg.
          </Notes>
        </Slide>
        <Slide>
          <Heading size={2} fit margin="0 0 40px" textColor="secondary">
            Getting started
          </Heading>
          <Link
            href="https://facebook.github.io/react-native/docs/getting-started.html"
            textColor="secondary"
          >
            facebook.github.io/react-native/docs/getting-started.html
          </Link>
          <Notes>The official documentation is really good.</Notes>
        </Slide>
        <Slide>
          <Heading size={3} margin="0 0 40px" textColor="secondary">
            Creating the app
          </Heading>
          <Text
            bgColor="tertiary"
            padding="20px"
            textAlign="left"
            textColor="secondary"
            textFont="tertiary"
          >
            brew install node watchman
            <br />
            npm install -g react-native-cli
            <br />
            react-native init AwesomeProject
          </Text>
          <Notes>
            If you have Xcode and Android Studio already installed, you're
            almost there.
          </Notes>
        </Slide>
        <Slide>
          <Heading size={3} margin="0 0 40px" textColor="secondary">
            Adding TypeScript
          </Heading>
          <CodePane
            source={nativeBootstrapSnippet}
            lang="javascript"
            textSize={24}
            theme="light"
          />
          <Notes>
            You'll need to compile your TypeScript files to a folder (e.g. dist)
            and then modify the entry point to import files out of that folder.
          </Notes>
        </Slide>
        <Slide>
          <Heading size={2} fit margin="0 0 40px" textColor="secondary">
            Miscellaneous
          </Heading>
        </Slide>
        <Slide>
          <Heading size={3} margin="0 0 40px" textColor="secondary">
            Popular libraries
          </Heading>
          <List>
            <ListItem>
              <Link
                href="https://github.com/react-navigation/react-navigation"
                textColor="secondary"
                textFont="tertiary"
              >
                react-navigation
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://github.com/oblador/react-native-vector-icons"
                textColor="secondary"
                textFont="tertiary"
              >
                react-native-vector-icons
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://github.com/react-native-community/react-native-svg"
                textColor="secondary"
                textFont="tertiary"
              >
                react-native-svg
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://github.com/react-community/react-native-image-picker"
                textColor="secondary"
                textFont="tertiary"
              >
                react-native-image-picker
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://github.com/obipawan/react-native-hyperlink"
                textColor="secondary"
                textFont="tertiary"
              >
                react-native-hyperlink
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://github.com/luggit/react-native-config"
                textColor="secondary"
                textFont="tertiary"
              >
                react-native-config
              </Link>
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={2} margin="0 0 40px" textColor="secondary">
            Authentication<br />with ADAL
          </Heading>
          <List>
            <ListItem>
              <Link
                href="https://github.com/Durgaprasad-Budhwani/azure-activedirectory-library-for-react-native"
                textColor="secondary"
                textFont="tertiary"
              >
                react-native-azure-adal
              </Link>{" "}
              (?)
            </ListItem>
            <ListItem>
              <Link
                href="https://github.com/northwesternmutual/azure-activedirectory-library-for-react-native"
                textColor="secondary"
                textFont="tertiary"
              >
                react-native-plugin-ms-adal
              </Link>{" "}
              (?)
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={3} margin="0 0 40px" textColor="secondary">
            More resources
          </Heading>
          <Link
            href="https://codeburst.io/25-react-native-tutorials-5b613e3f46ac"
            textColor="secondary"
          >
            codeburst.io/25-react-native-tutorials-5b613e3f46ac
          </Link>
        </Slide>
        <Slide>
          <Heading size={2} fit margin="0 0 40px" textColor="secondary">
            Questions?
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
