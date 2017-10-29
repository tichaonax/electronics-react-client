export const setBandColor = (bandSelect, bandColor) => {
        let item = $(`select[name=${bandSelect}]`);
        item.find(`option[value=${bandColor}]`).attr('selected',true);
        item.attr('style', `background-color: ${bandColor}`);
    }

