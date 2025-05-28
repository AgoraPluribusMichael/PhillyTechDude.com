US_POP = 340_000_000  # https://www.census.gov/library/stories/2024/12/population-estimates.html
US_POP_99_PCT = int(US_POP * 0.99)
NUM_SSA_RECIP_EST = 70_000_000  # https://www.ssa.gov/policy/docs/quickfacts/stat_snapshot/

# Only distribute Prosperity Dividend to those who aren't Social Security beneficiaries
NUM_DIVIDEND_RECIP = US_POP_99_PCT - NUM_SSA_RECIP_EST

TAX_RATE = 0.15

if __name__ == "__main__":
    output_list = list()

    last_net_worth = 0
    curr_net_worth = 0
    date = None

    # Wealth distribution data from the Federal Reserve
    # https://www.federalreserve.gov/releases/z1/dataviz/dfa/distribute/table/
    # https://www.federalreserve.gov/releases/z1/dataviz/download/zips/dfa.zip
    with open("dfa/dfa-networth-levels.csv") as csv_file:
        for line in csv_file:
            if "TopPt1" in line or "RemainingTop1" in line:
                columns = line.split(',')
                date = columns[0]
                net_worth = int(columns[2]) * 1_000_000  # Number in millions
                curr_net_worth += net_worth
            else:
                if date is not None:
                    delta_net_worth = curr_net_worth - last_net_worth
                    tax_revenue = max(0.0, delta_net_worth * TAX_RATE)
                    dividend = round(tax_revenue / NUM_DIVIDEND_RECIP, 2)

                    output_list.append((date, dividend))

                    last_net_worth = curr_net_worth
                    curr_net_worth = 0
                    date = None

    with open("estimated_dividends_per_recipient.txt", 'w') as output_file:
        total_dividends = 0
        num_months = 40  # Get average quarterly dividend over the last 10 years
        for date, dividend in output_list[-num_months:]:
            output_file.write(f"{date}: ${dividend}\n")
            if dividend > 0:
                total_dividends += dividend
        avg_dividend = round(total_dividends / num_months, 2)
        output_file.write(f"Average dividend since 2015: ${avg_dividend}\n")
