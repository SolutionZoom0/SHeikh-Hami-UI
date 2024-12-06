"use client";

import { useState, useEffect } from "react";
import FatwaItem from "@/components/FatwaItem";
import BentoFolioLayout from "@/layout/BentoFolioLayout";

export default function FatawaDetailsPage() {
  const currentItem = JSON.parse(localStorage.getItem("selectedFatwa"));

  return (
    <BentoFolioLayout>
      <div className="col-xl-8">
        <div className="card content-box-card">
          <div className="card-body portfolio-card">
            <div className="top-info">
              <div className="text">
                <h1 className="main-title">Recent Questions to the Sheikh</h1>
              </div>
            </div>
            <div className="article-publications article-area">
              <div className="article-publications-main">
                <div className="row">
                  <div>Question :- {currentItem.question}</div>
                  <div>Answer :- {currentItem.answer}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BentoFolioLayout>
  );
}
