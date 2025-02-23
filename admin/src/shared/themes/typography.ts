import { css } from "@emotion/react";

const compare = css`
  text-decoration-skip-ink: none;
  text-underline-position: from-font;
  text-align: left;
`;

const Typography = {
  regular: {
    12: css`
      font-family: "var(--FontfamilyInter)";
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: var(--LetterspacingLetterspacing);
      ${compare}
    `,
    14: css`
      //styleName: 14 Regular;
      font-family: var(--FontFamily);
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: var(--LetterSpacing);
      ${compare}
    `,
    16: css`
      //styleName: 16 Regular;
      font-family: var(--FontFamily);
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: var(--LetterSpacing);
      ${compare}
    `,
    18: css`
      //styleName: 18 Regular;
      font-family: var(--FontFamily);
      font-size: 18px;
      font-weight: 400;
      line-height: 28px;
      letter-spacing: var(--LetterSpacing);
      ${compare}
    `,
    24: css`
      //styleName: 24 Regular;
      font-family: var(--FontFamily);
      font-size: 24px;
      font-weight: 400;
      line-height: 32px;
      letter-spacing: var(--LetterSpacing);
      ${compare}
    `,
    32: css`
      //styleName: 32 Regular;
      font-family: var(--FontFamily);
      font-size: 32px;
      font-weight: 400;
      line-height: 40px;
      letter-spacing: var(--LetterSpacing);
      ${compare}
    `,
    48: css`
      //styleName: 48 Regular;
      font-family: var(--FontFamily);
      font-size: 48px;
      font-weight: 400;
      line-height: 58px;
      letter-spacing: var(--LetterSpacing);
      ${compare}
    `,
    64: css`
      //styleName: 64 Regular;
      font-family: var(--FontFamily);
      font-size: 64px;
      font-weight: 400;
      line-height: 78px;
      letter-spacing: var(--LetterSpacing);
      ${compare}
    `,
  },
  semibold: {
    12: css`
      //styleName: 12 Semibold;
      font-family: var(--FontFamily);
      font-size: 12px;
      font-weight: 600;
      line-height: 16px;
      letter-spacing: var(--LetterSpacing);
      ${compare}
      ${compare}
    `,
    14: css`
      //styleName: 14 Semibold;
      font-family: var(--FontFamily);
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
      letter-spacing: var(--LetterSpacing);
      ${compare}
    `,
    16: css`
      //styleName: 16 Semibold;
      font-family: var(--FontFamily);
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: var(--LetterSpacing);
      ${compare}
    `,
    18: css`
      //styleName: 18 Semibold;
      font-family: var(--FontFamily);
      font-size: 18px;
      font-weight: 600;
      line-height: 28px;
      letter-spacing: var(--LetterSpacing);
      ${compare}
    `,
    24: css`
      //styleName: 24 Semibold;
      font-family: var(--FontFamily);
      font-size: 24px;
      font-weight: 600;
      line-height: 32px;
      letter-spacing: var(--LetterSpacing);
      ${compare}
    `,
    32: css`
      //styleName: 32 Semibold;
      font-family: var(--FontFamily);
      font-size: 32px;
      font-weight: 600;
      line-height: 40px;
      letter-spacing: var(--LetterSpacing);
      ${compare}
    `,
    48: css`
      //styleName: 48 Semibold;
      font-family: var(--FontFamily);
      font-size: 48px;
      font-weight: 600;
      line-height: 58px;
      letter-spacing: var(--LetterSpacing);
      ${compare}
    `,
    64: css`
      //styleName: 64 Semibold;
      font-family: var(--FontFamily);
      font-size: 64px;
      font-weight: 600;
      line-height: 78px;
      letter-spacing: var(--LetterSpacing);
      ${compare}
    `,
  },
};

export default Typography;
