import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory, useTheme } from '@grafana/ui';

interface Props extends PanelProps<SimpleOptions> {}

export const Windchart: React.FC<Props> = ({ options, data, width, height }) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const dir = data.series.map(s => s.fields.find(f => f.name === 'dir'))[0]?.values.toArray();

  const mph = data.series
    .map(s => s.fields.find(f => f.name === 'mps'))[0]
    ?.values.toArray()
    .map(v => Number((v * 2.237).toFixed(1)));

  const maxMph = Math.max(...mph);

  const ringRadii = Array.from({ length: Math.floor(maxMph) })
    .map((_, i) => {
      if (i % 5 === 0) {
        return i;
      }
      return undefined;
    })
    .filter(v => v !== undefined)
    .slice(1);

  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
        <defs>
          <path id="hash" d="M 250 3 L 256 29 L 262 3 Z" fill="black" />
          <line id="line" x1="256" y1="32" x2="256" y2="480" className={styles.line} />
          <mask id="hash-mask">
            <circle cx="256" cy="256" r="240" stroke="white" stroke-width="32px" />

            <g>
              <text x="243" y="30" fill="black" className={styles.text}>
                N
              </text>
              <text x="483" y="269" fill="black" className={styles.text}>
                E
              </text>
              <text x="243" y="509" fill="black" className={styles.text}>
                S
              </text>
              <text x="4" y="269" fill="black" className={styles.text}>
                W
              </text>

              <use href="#hash" transform="rotate(22.5, 256, 256)" />
              <use href="#hash" transform="rotate(45, 256, 256)" />
              <use href="#hash" transform="rotate(67.5, 256, 256)" />
              <use href="#hash" transform="rotate(112.5, 256, 256)" />
              <use href="#hash" transform="rotate(135, 256, 256)" />
              <use href="#hash" transform="rotate(157.5, 256, 256)" />
              <use href="#hash" transform="rotate(202.5, 256, 256)" />
              <use href="#hash" transform="rotate(225, 256, 256)" />
              <use href="#hash" transform="rotate(247.5, 256, 256)" />
              <use href="#hash" transform="rotate(292.5, 256, 256)" />
              <use href="#hash" transform="rotate(315, 256, 256)" />
              <use href="#hash" transform="rotate(337.5, 256, 256)" />
            </g>
          </mask>
        </defs>

        {/* <use href="#line" /> */}
        <use href="#line" transform="rotate(22.5, 256, 256)" />
        {/* <use href="#line" transform="rotate(45, 256, 256)" /> */}
        <use href="#line" transform="rotate(67.5, 256, 256)" />
        {/* <use href="#line" transform="rotate(90, 256, 256)" /> */}
        <use href="#line" transform="rotate(112.5, 256, 256)" />
        {/* <use href="#line" transform="rotate(135, 256, 256)" /> */}
        <use href="#line" transform="rotate(157.5, 256, 256)" />

        <circle className={styles.face} id="face" cx="256" cy="256" r="240" mask="url(#hash-mask)" />
        <g>
          {dir?.map((d, i) => (
            <circle
              cx={
                256 +
                //@ts-ignore
                (220 / maxMph) * mph[i] * Math.cos((d - 90) * (Math.PI / 180))
              }
              cy={
                256 +
                //@ts-ignore
                (220 / maxMph) * mph[i] * Math.sin((d - 90) * (Math.PI / 180))
              }
              r={3}
              fill={theme.palette.orange}
              style={{ fillOpacity: 1 - (1 / dir.length) * i }}
            />
          ))}
        </g>
        <g>
          {ringRadii.map(i => (
            //@ts-ignore
            <circle cx={256} cy={256} r={(220 / maxMph) * i} className={styles.ring} />
          ))}
        </g>
      </svg>
      <div className={styles.velocityLegend}>Max: {maxMph}mph</div>
    </div>
  );
};

const getStyles = stylesFactory(theme => {
  return {
    ring: css`
      fill: transparent;
      stroke: ${theme.palette.yellow};
      stroke-width: 1;
    `,
    wrapper: css`
      position: relative;
    `,
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
    direction: css`
      fill: black;
    `,
    directionIndicator: css`
      fill: ${theme.palette.orange};
      transform-origin: 256px 256px;
      transform: rotate(0deg);
    `,
    face: css`
      fill: none;
      stroke: ${theme.palette.yellow};
      stroke-width: 32px;
    `,
    centerCircle: css`
      fill: ${theme.colors.bg1};
    `,
    velocityText: css`
      fill: ${theme.palette.yellow};
    `,
    text: css`
      fill: black;
      font-weight: bold;
      font-family: 'Courier New', Courier, monospace;
      font-size: 3rem;
    `,
    velocityLegend: css`
      position: absolute;
      left: 0;
      bottom: 0;
      color: ${theme.palette.orange};
      font-weight: bold;
    `,
    line: css`
      stroke: ${theme.palette.yellow};
      stroke-width: 1px;
    `,
  };
});
