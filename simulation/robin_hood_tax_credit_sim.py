import json

# https://www.bls.gov/news.release/empsit.t01.htm
NUM_WORKERS = 170_000_000

BASE_TAX_RATE = 0.15

HIGH_INFLATION_DICT = {
    2008: 0.04,
    2021: 0.05,
    2022: 0.08
}

def generate_html_table(tax_relief_dict, min_year=2005):
    with open("tax_relief_table.html", "w") as html_file:
        html_file.write(f"<tr><td style=\"font-weight: bold;\">Year</td>")
        for year in sorted(tax_relief_dict.keys()):
            if year >= min_year:
                html_file.write(f"<td>{year}</td>")
        html_file.write(f"</tr>\n")
        html_file.write(f"<tr><td style=\"font-weight: bold;\">Tax Relief</td>")
        for year in sorted(tax_relief_dict.keys()):
            if year >= min_year:
                html_file.write(f"<td>${int(tax_relief_dict[year])}</td>")
        html_file.write(f"</tr>\n")


if __name__ == "__main__":
    tax_revenue_dict = dict()

    last_net_worth = 0
    curr_net_worth = 0
    date = None

    # Wealth distribution data from the Federal Reserve
    # https://www.federalreserve.gov/releases/z1/dataviz/dfa/distribute/table/
    # https://www.federalreserve.gov/releases/z1/dataviz/download/zips/dfa.zip
    NET_WORTH_DATA_CSV = "dfa/dfa-networth-levels.csv"

    # Step 1: Calculate total wealth gains tax per quarter
    with open(NET_WORTH_DATA_CSV) as csv_file:
        for line in csv_file:
            if "TopPt1" in line or "RemainingTop1" in line:
                columns = line.split(',')
                date = columns[0]
                net_worth = int(columns[2]) * 1_000_000  # Number in millions
                curr_net_worth += net_worth
            else:
                if date is not None:
                    delta_net_worth = curr_net_worth - last_net_worth
                    year = int(date.split(":")[0])
                    if year in HIGH_INFLATION_DICT:
                        tax_rate = 3 * HIGH_INFLATION_DICT[year]
                    else:
                        tax_rate = 0.15
                    tax_revenue = max(0.0, delta_net_worth * tax_rate)

                    tax_revenue_dict[date] = tax_revenue

                    last_net_worth = curr_net_worth
                    curr_net_worth = 0
                    date = None
    with open("1-tax_revenue_dict.csv", 'w') as csv_file:
        for quarter in sorted(tax_revenue_dict.keys()):
            csv_file.write(f"{quarter},{tax_revenue_dict[quarter]}\n")

    # Step 2: Calculate annual tax relief, assuming tax relief is uniformly applied across all tax returns
    annual_tax_relief_dict = dict()
    annual_tax_revenue = 0
    curr_date = ""
    for date, revenue in tax_revenue_dict.items():
        annual_tax_revenue += revenue
        if "Q1" in date:
            curr_date = date
        elif curr_date and "Q4" in date:
            year = int(curr_date.split(':')[0])
            annual_tax_relief_dict[year] = round(annual_tax_revenue / NUM_WORKERS, 2)
            annual_tax_revenue = 0
    with open("2-annual_tax_relief.csv", 'w') as csv_file:
        for year in sorted(annual_tax_relief_dict.keys()):
            csv_file.write(f"{year},{annual_tax_relief_dict[year]}\n")

    generate_html_table(annual_tax_relief_dict)
