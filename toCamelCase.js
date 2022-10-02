const toCamelCase = s => 
    s === '' 
        ? '' 
        : s
            .split(/-|_/g)
            .map((e, i) => i === 0 ? e : e[0].toUpperCase() + e.slice(1))
            .join('')