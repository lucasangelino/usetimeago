const DATE_UNITS = [
  ["year", 31536000],
  ["month", 2592000],
  ["week", 604800],
  ["day", 86400],
  ["hour", 3600],
  ["minute", 60],
  ["second", 1],
];

const getDateDiff = (timestamp) => {
  const now = Date.now();
  const elpased = (timestamp - now) / 1000;

  for (const [unit, seconds] of DATE_UNITS) {
    if (Math.abs(elpased) > seconds || unit === "second") {
      const value = Math.round(elpased / seconds);
      return { value, unit };
    }
  }
};

function useTimeAgo({ timestamp, lang = "es", style = "short" }) {
  const { value, unit } = getDateDiff(timestamp);
  const rtf = new Intl.RelativeTimeFormat(lang, {
    style: style,
  });

  return rtf.format(value, unit);
}

module.exports = useTimeAgo;
