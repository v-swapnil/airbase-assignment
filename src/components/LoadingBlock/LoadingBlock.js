import { useMemo } from "react";

export function LoadingBlock({ isLoading, config, ...props }) {
  const loadingConfig = useMemo(() => {
    if (!config) {
      return [{ display: "block", width: 100, height: 100, marginBottom: 8 }];
    }
    return config.reduce((result, item) => {
      const styles = {
        display: item.display || "block",
        marginBottom: item.spacing || 8,
      };
      if (item.type === "circle") {
        styles.borderRadius = "50%";
        styles.width = item.radius;
        styles.height = item.radius;
      } else if (item.type === "rect") {
        styles.width = item.width;
        styles.height = item.height;
      }
      if (item.count) {
        const newItems = new Array(item.count).fill(styles);
        result.push(...newItems);
      } else {
        result.push(styles);
      }
      return result;
    }, []);
  }, [config]);

  if (isLoading) {
    return (
      <div className={props.className}>
        {loadingConfig.map((item, index) => (
          <div
            key={"item-" + index}
            className="loading-animation"
            style={item}
          />
        ))}
      </div>
    );
  }
  return props.component || null;
}
