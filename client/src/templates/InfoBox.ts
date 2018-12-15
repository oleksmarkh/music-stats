import classNames from 'classnames';

import {Artist, AreaProperties} from 'src/types/models';
import {html, url} from 'src/utils/render';

import './InfoBox.scss';

interface ArtistListItemProps {
  artist: Artist;
  username: string;
}

function renderArtistListItem({
  artist,
  username,
}: ArtistListItemProps): string {
  return `
    <tr
      class="InfoBox__artist"
    >
      <td
        class="${classNames(
          'InfoBox__artist-rank',
          {
            [classNames(
              'InfoBox__artist-rank--medal',
              `InfoBox__artist-rank--medal-${artist.rank}`,
            )]: artist.rank <= 3
          }
        )}"
      >
        #${artist.rank}
      </td>

      <td
        class="InfoBox__artist-playcount"
      >
        <a
          href="${url`https://www.last.fm/user/${username}/library/music/${artist.name}`}"
          target="_blank"
        >
          ${artist.playcount.toLocaleString()}
        </a>
      </td>

      <td
        class="InfoBox__artist-name"
      >
        <a
          href="${url`https://www.last.fm/music/${artist.name}`}"
          target="_blank"
        >
          ${artist.name}
        </a>
      </td>
    </tr>
  `;
}

interface InfoBoxProps extends AreaProperties {
  username: string;
  totalCountriesCount: number;
  totalArtistCount: number;
  totalScrobbleCount: number;
  areaScrobbleCount: number;
  areaFlagDataUrl: string;
}

export default function render({
  username,
  totalCountriesCount,
  totalScrobbleCount,
  totalArtistCount,
  areaScrobbleCount,
  areaFlagDataUrl,
  ...area
}: InfoBoxProps): string {
  return html`
    <section
      class="InfoBox__section InfoBox__section--header"
    >
      <div>
        <span>
          last.fm user:&nbsp;
        </span>
        <a
          href="https://www.last.fm/user/${username}"
          target="_blank"
        >
          ${username}
        </a>
      </div>

      <aside
        class="InfoBox__close-button-container"
      >
        ${area.name
          ? `
            <button
              class="InfoBox__close-button"
              title="close"
            >
              &times;
            </button>
          `
          : ``
        }
      </aside>
    </section>

    <section
      class="InfoBox__section"
    >
      <header
        class="InfoBox__header"
      >
        Total
      </header>

      <p>
        countries: ${totalCountriesCount}
      </p>

      <p>
        <span>
          artists:&nbsp;
        </span>
        <a
          href="https://www.last.fm/user/${username}/library/artists"
          target="_blank"
        >
          ${totalArtistCount.toLocaleString()}
        </a>
      </p>

      <p>
        <span>
          scrobbles:&nbsp;
        </span>
        <a
          href="https://www.last.fm/user/${username}/library"
          target="_blank"
        >
          ${totalScrobbleCount.toLocaleString()}
        </a>
      </p>
    </section>

    <section
      class="InfoBox__section"
    >
      ${area.name
        ? `
          <header
            class="InfoBox__header"
          >
            <div
              class="InfoBox__area-flag"
              style="
                background-image: url('${areaFlagDataUrl}');
              "
            >
            </div>

            <span>
              ${area.name}
            </span>
          </header>

          <p>
            artists: ${area.artists.length.toLocaleString()}
          </p>

          <p>
            scrobbles: ${areaScrobbleCount.toLocaleString()}
          </p>

          <table
            class="InfoBox__artist-list"
          >
            ${area.artists.map((artist) => renderArtistListItem({
              artist,
              username,
            })).join('')}
          </table>
        `
        : `
          <p>
            (hover over a country)
          </p>
        `
      }
    </section>
  `;
}
