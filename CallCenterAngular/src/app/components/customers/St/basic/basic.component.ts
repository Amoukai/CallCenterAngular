import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from './../../../../services/data.service';
import { StBasicVm } from './../../../../models/st-basic-vm.model';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
})
export class BasicComponent {
  public basicData: StBasicVm = {
    sIdno: '',
    brokerNo4: '',
    sAcno: '',
    sName: '',
    nbankName: '',
    nbankAcctNo: '',
    obankName: '',
    obankAcctNo: '',
    investorSex: '',
    birthday: '',
    zipBirth: '',
    zipCont: '',
    addrBirth: '',
    addrCont: '',
    investorTel1: '',
    investorTel2: '',
    investorMobile: '',
    saleCode: '',
    freezeReason: '',
    tradeStatus: '',
    legalAgent1Name: '',
    agentName: '',
    agentId: '',
    agentBirthday: '',
    agentCloseDate: '',
    bondAcctNo: '',
    acctCloseDate: '',
    tradeLimit: '',
    mmaAcctNo: '',
    personalData: '',
    referencesName: '',
    referencesTel: '',
    promoBank: '',
    promoFutures: '',
    financialAdvisor: '',
    legalAgent1Id: '',
    legalAgent1Birthday: '',
    tel21: '',
    earmarkEndDate: '',
    companyName: '',
    emergingRisk: '',
    emergingRiskNew: '',
    firstEmerging: '',
    warrantRisk: '',
    otcRisk: '',
    warrantRiskNew: '',
    cbbcRisk: '',
    foreignSecRisk: '',
    riskDisclosureStatement: '',
    firstSecRisk: '',
    japanNote: '',
    futuresEtfRisk: '',
    ultrashortEtf: '',
    ultrashortEtfTrade: '',
    spotGold: '',
    mediaNetReceipts: '',
    legalAgent2Name: '',
    legalAgent2Id: '',
    legalAgent2Birthday: '',
    loanContract: '',
    loanRates: '',
    daytradeRiskAgree: '',
    dayTradeDate: '',
    dayTradeLimit: '',
    dayTradeStatus: '',
    acctCreateDate: '',
    promoInvest: '',
    earmarkStartDate: '',
    investorEmail: '',
    acctSource: '',
    career: '',
    launderRisk: '',
    amlRisk: '',
    officeTel1: '',
    officeTel2: '',
    currencyEtfRisk: '',
    pBankBookStartDate: '',
    pBankBookEndDate: '',
    phoneLastDate: '',
    onlineTradingContract: '',
    earMark: '',
    arMarkAmt: '',
    etf01: '',
    postWay: '',
    wmDate: '',
    riskDisclosureWithFu: '',
    etnStatement: '',
    etnTrade: '',
    transStatement: '',
    etnNotToSignDate: '',
    promoRest: '',
    promoInvestments: '',
    sameIpStatement: '',
    sameIpDate: '',
    cuaey: '',
    cuaez: '',
    cuae0: '',
    cuaf0Date: '',
    etnRiskStrategyStatement: '',
    fuEtfTest: '',
    investorFax: '',
    fafApplyDate: '',
    fafCancelDate: '',
    spOrg: '',
  };

  constructor(
    private readonly dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const data = this.dataService.getData();
    if (data) {
      this.basicData = data;
    } else {
      this.router.navigate(['/Customer']);
    }
  }
}
