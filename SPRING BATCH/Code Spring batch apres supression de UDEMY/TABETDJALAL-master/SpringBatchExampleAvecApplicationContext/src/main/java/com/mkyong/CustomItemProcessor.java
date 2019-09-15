package com.mkyong;

import org.springframework.batch.item.ItemProcessor;

import com.mkyong.model.Report;


public class CustomItemProcessor implements ItemProcessor<Report, Report> {

	@Override
	public Report process(Report item) throws Exception {

		if (item.getId() % 2 ==0) {
			System.out.println("Processing..." + item);
			return item;
		} else {
			//throw new CustomException("Process failed.  Attempt:" + item);
			System.out.println("Processing...ee" + item);
			return item;
		}

	}

}