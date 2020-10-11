import React from "react";
import pika from "./pikerchu.png";
import "../styles.scss";

export default () => {
  return (
    <span className="InA11y">
      <main>
        <h2>Did you know there is a free api for pokemon data?</h2>
        <h4>
          You could find it
          <a href="https://pokeapi.co/"> here.</a>
        </h4>
        <section>
          <h2>
            Other cool pokemon stuff include an ipsum generator, a gene splicer,
            and a team generator for Pokemon go.
          </h2>
          <p>
            Pokem ipsum dolor sit amet Natu Zephyr Badge Timburr Alakazam
            Croconaw I know it's my destiny. Ut aliquip ex ea commodo consequat
            Shelgon Metagross Graveler Skiploom Chimecho Magmortar. Excepteur
            sint occaecat cupidatat non proident Barboach Vine Whip Poliwhirl
            Sunflora Noctowl Purugly. Razor Leaf Dome Fossil Pokemon Heroes
            Palkia Bouffalant Illumise Wurmple. Dragon Ampharos Zorua Garchomp
            Ponyta Ledian Sandile. Zephyr Badge Spearow Harden Aron Ponyta
            Charmeleon sunt in culpa qui officia. Strength Meganium Mismagius
            sunt in culpa qui officia excepteur sint occaecat cupidatat non
            proident Shieldon Palpitoad. Yellow Silver Purrloin Zoroark Gary
            Carnivine Gengar. Water Gun Banette Octillery Water Phione Gardevoir
            Pignite. Pallet Town Phanpy Emboar Haxorus Togekiss Dustox to catch
            them is my real test.
          </p>
          <p>
            Yellow Skuntank Kricketune Vullaby Throh Blastoise Beartic.
            Excepteur sint occaecat cupidatat non proident Froslass Poliwag
            Ralts Cradily Rising Badge Vaporeon. Wartortle Strength Kangaskhan
            Sharpedo Durant Shieldon Nidoqueen. Fire Reshiram Youngster wants to
            fight Seviper Azurill Wingull Grumpig. Consectetur adipisicing elit
            Zekrom Metagross Silver Stunfisk Nurse Joy Krabby.
          </p>
          <footer>
            <div
              className="InA11y__btn"
              onClick={() => {
                window.location.href = "https://pokemipsum.com/";
              }}
            >
              <h5>Travel To Generator</h5>
            </div>
            <button
              className="InA11y__btn"
              onClick={() => {
                window.location.href = "https://pokemon.alexonsager.net/";
              }}
            >
              <h5>Splice The Pokemons</h5>
            </button>
            <a
              className="InA11y__btn"
              href="https://honko.github.io/pokemon-team-generator/"
              tabIndex={-1}
            >
              <h5>Team Building</h5>
            </a>
          </footer>
        </section>
      </main>
      <header>
        <img src={pika} />
        <span className="InA11y__title">
          <h1>Chase's Inaccessible Worksheet</h1>
          <h3>Can he catch them all?</h3>
        </span>
      </header>
      <footer className="InA11y__footer">
        <h4>&copy; 2020</h4>
      </footer>
    </span>
  );
};
